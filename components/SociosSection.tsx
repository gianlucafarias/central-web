'use client'

import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import {  Users, Calendar, Star } from "lucide-react";
import { cn } from "../lib/utils";
import React from "react";

const imageUrl = '/sociosbg.jpg';
const membershipPlans = [
  {
    id: "basic",
    name: "Socio Básico",
    price: "$2500",
    period: "/ mes",
    benefits: [
      "Acceso a instalaciones deportivas",
      "Descuentos en entradas a partidos",
      "Boletín informativo mensual"
    ],
    icon: <Users className="h-10 w-10 text-club-primary" />,
  },
  {
    id: "family",
    name: "Socio Familiar",
    price: "$4000",
    period: "/ mes",
    benefits: [
      "Todos los beneficios del plan básico",
      "Incluye hasta 4 miembros familiares",
      "Descuentos en todas las actividades deportivas"
    ],
    icon: <Calendar className="h-10 w-10 text-club-primary" />,
    popular: true
  },
 
];

function useOnScreen(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when element enters/leaves viewport
      setIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]); // Re-run only if ref changes

  return isIntersecting;
}

const MembershipSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("family");
  const [sociosCount, setSociosCount] = useState(0);
  const [deportistasCount, setDeportistasCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To animate only once
  
  const counterRef = useRef<HTMLDivElement>(null); // Ref for the counter section
  const isVisible = useOnScreen(counterRef, { threshold: 0.5 }); 

  const targetSocios = 2000;
  const targetDeportistas = 300;
  const animationDuration = 2000; // ms

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true); // Ensure animation runs only once
      let startTime: number | null = null;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / animationDuration, 1);

        setSociosCount(Math.floor(progressRatio * targetSocios));
        setDeportistasCount(Math.floor(progressRatio * targetDeportistas));

        if (progress < animationDuration) {
          requestAnimationFrame(animateCount);
        } else {
           setSociosCount(targetSocios); 
           setDeportistasCount(targetDeportistas);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isVisible, hasAnimated]);

  
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat bg-fixed py-20 pb-40 "
      style={{ backgroundImage: `url(${imageUrl})` }} 
      id="hacete-socio" 
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">¡Hacete Socio ahora!</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            En unos simples pasos podés ser parte de la familia del Club Central Argentino Olimpico desde cualquier lugar del mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {membershipPlans.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                return (
                  <Card 
                    key={plan.id}
                    className={cn(
                      "relative overflow-hidden transition-all cursor-pointer card-hover border",
                      isSelected
                        ? 'border-club-primary bg-yellow-300 shadow-[0_0_15px_3px_rgba(255,220,0,0.5)]'
                        : 'border-gray-200'
                    )}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-club-accent text-club-primary font-medium text-xs py-1 px-3 rounded-bl-lg flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {React.cloneElement(plan.icon, {
                          className: cn(plan.icon.props.className, isSelected ? 'text-club-dark' : 'text-gray-500') 
                        })}
                      </div>
                      <h4 className={cn("font-bold text-xl text-center mb-2 font-mono", isSelected ? 'text-club-dark' : 'text-gray-500')}>
                        {plan.name}
                      </h4>
                      <div className={cn("text-center mb-4", isSelected ? 'text-gray-800' : 'text-gray-500')}>
                        <span className="text-2xl font-bold font-mono">{plan.price}</span>
                        <span className={cn("text-sm", isSelected ? 'text-gray-700' : 'text-gray-500')}> {plan.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.benefits.map((benefit, index) => (
                          <li key={index} className={cn("text-sm flex items-start", isSelected ? 'text-gray-900' : '')}>
                            <span className={cn("mr-2", isSelected ? 'text-green-700' : 'text-green-500')}>
                              ✓
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div ref={counterRef} className="mt-10 pt-8 border-t border-gray-700/30 flex justify-around text-center">
              <div>
                <h4 className="text-4xl md:text-4xl font-bold text-white mb-1 font-mono">
                  +{sociosCount}
                </h4>
                <p className="text-sm text-gray-300 uppercase tracking-wider font-mono">Socios</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-4xl font-bold text-white mb-1 font-mono">
                  +{deportistasCount}
                </h4>
                <p className="text-sm text-gray-300 uppercase tracking-wider font-mono">Deportistas</p>
              </div>
            </div>

          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Ingresa tu apellido" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="+54 9 12345678" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="membershipType">Tipo de Membresía</Label>
                    <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un plan" />
                      </SelectTrigger>
                      <SelectContent>
                        {membershipPlans.map(plan => (
                          <SelectItem key={plan.id} value={plan.id}>
                            {plan.name} - {plan.price} {plan.period}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full bg-club-primary hover:bg-club-dark">
                    Enviar Solicitud
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Al enviar este formulario, aceptas los términos y condiciones del Club Central Argentino Olimpico.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;