'use client'

import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Users, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";
import React from "react";

const imageUrl = '/sociosbg.jpg';

// Definición del plan de membresía único
const mainMembershipPlan = {
  id: "socio-activo",
  name: "Socio Activo",
  price: 2500, // Usar número para cálculos
  priceDisplay: "$2500",
  period: "/ mes",
  benefits: [
    "Acceso a instalaciones deportivas",
    "Descuentos en entradas a partidos",
    "Boletín informativo mensual",
    "Participación en actividades sociales y culturales"
  ],
  icon: <Users className="h-8 w-8 text-club-dark" />,
  additionalFamilyMemberPrice: 1500, // Precio por familiar adicional
  additionalFamilyMemberPriceDisplay: "$1500",
};

const TOTAL_STEPS = 3;

function useOnScreen(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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
  }, [ref]);

  return isIntersecting;
}

const MembershipSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [numberOfFamilyMembers, setNumberOfFamilyMembers] = useState(0);
  const [totalPrice, setTotalPrice] = useState(mainMembershipPlan.price);

  const [sociosCount, setSociosCount] = useState(0);
  const [deportistasCount, setDeportistasCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const counterRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(counterRef, { threshold: 0.5 }); 

  const targetSocios = 2000;
  const targetDeportistas = 300;
  const animationDuration = 2000; // ms

  useEffect(() => {
    const calculatedTotal = mainMembershipPlan.price + (numberOfFamilyMembers * mainMembershipPlan.additionalFamilyMemberPrice);
    setTotalPrice(calculatedTotal);
  }, [numberOfFamilyMembers]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", { ...formData, numberOfFamilyMembers, totalPrice });
    setCurrentStep(TOTAL_STEPS + 1); // Avanza al paso de confirmación (que es TOTAL_STEPS + 1 conceptualmente)
  };
  
  const formTitles = [
    "Paso 1: Detalles", // Títulos simplificados
    "Paso 2: Crea tu Cuenta",
    "Paso 3: Confirmación Final"
  ];
  const stepConfirmationTitle = "¡Solicitud Enviada!";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="bg-white/80 backdrop-blur-sm text-gray-800 shadow-xl rounded-lg border border-white/30">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  {mainMembershipPlan.icon}
                  <h4 className="font-bold text-2xl text-club-dark font-mono ml-3">
                    {mainMembershipPlan.name}
                  </h4>
                </div>
                
                <div className="mb-5">
                  <span className="text-3xl font-bold text-club-dark font-mono">{mainMembershipPlan.priceDisplay}</span>
                  <span className="text-md text-gray-700"> {mainMembershipPlan.period}</span>
                </div>

                <h5 className="font-semibold text-lg text-gray-700 mb-2">Beneficios incluidos:</h5>
                <ul className="space-y-2 mb-6 list-disc list-inside text-gray-700">
                  {mainMembershipPlan.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/40">
                   <p className="text-sm text-gray-700">
                    Podés agregar miembros de tu grupo familiar por un costo adicional de 
                    <span className="font-semibold text-club-dark"> {mainMembershipPlan.additionalFamilyMemberPriceDisplay} c/u</span> por mes.
                    Configura esta opción en el formulario de solicitud.
                  </p>
                </div>
              </CardContent>
            </Card>
            
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
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-700">
                  {currentStep <= TOTAL_STEPS ? formTitles[currentStep - 1] : stepConfirmationTitle}
                </h3>
                
                {/* Indicador de Pasos */} 
                {currentStep <= TOTAL_STEPS && (
                  <div className="flex items-center w-full px-2 sm:px-4 md:px-8 my-6">
                    {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
                      const stepNumber = index + 1;
                      const isActive = currentStep === stepNumber;
                      const isCompleted = currentStep > stepNumber;

                      return (
                        <React.Fragment key={stepNumber}>
                          <div className="flex flex-col items-center">
                            <div
                              className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold border-2 transition-all duration-300 ease-in-out",
                                isActive
                                  ? "bg-club-primary border-club-primary text-black scale-110"
                                  : isCompleted
                                  ? "bg-club-primary/70 border-club-primary/70 text-black"
                                  : "bg-gray-200 border-gray-300 text-gray-500"
                              )}
                            >
                              {stepNumber}
                            </div>
                           
                          </div>
                          {stepNumber < TOTAL_STEPS && (
                            <div
                              className={cn(
                                "flex-auto border-t-2 transition-all duration-300 ease-in-out mx-1",
                                isCompleted || isActive ? "border-club-primary" : "border-gray-300"
                              )}
                            />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                  {currentStep === 1 && (
                    <>
                      {/* Campos del Paso 1 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nombre</Label>
                          <Input id="firstName" placeholder="Ingresa tu nombre" value={formData.firstName} onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Apellido</Label>
                          <Input id="lastName" placeholder="Ingresa tu apellido" value={formData.lastName} onChange={handleInputChange} />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dni">DNI</Label>
                        <Input id="dni" type="number" placeholder="12345678" value={formData.dni} onChange={handleInputChange} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" placeholder="+54 9 12345678" value={formData.phone} onChange={handleInputChange} />
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h5 className="font-semibold text-md mb-1 text-gray-700">Grupo Familiar (Opcional)</h5>
                        <p className="text-xs text-gray-500 mb-3">
                          Costo adicional: {mainMembershipPlan.additionalFamilyMemberPriceDisplay} por familiar/mes.
                        </p>
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="familyMembers" className="text-sm font-medium text-gray-600">Número de familiares adicionales:</Label>
                          <Input 
                            id="familyMembers" 
                            type="number" 
                            min="0"
                            max="10" 
                            value={numberOfFamilyMembers} 
                            onChange={(e) => {
                              const value = parseInt(e.target.value, 10);
                              setNumberOfFamilyMembers(Math.max(0, isNaN(value) ? 0 : value));
                            }}
                            className="border-gray-300 focus:border-club-primary"
                            placeholder="0"
                          />
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200 text-center">
                        <p className="text-md font-semibold mb-1 text-gray-700">Total Estimado Mensual:</p>
                        <p className="text-2xl font-bold text-club-dark font-mono">
                          ${totalPrice.toLocaleString('es-AR')}
                        </p>
                      </div>
                      <Button type="button" onClick={handleNextStep} className="w-full bg-club-primary text-black hover:bg-club-dark hover:text-white cursor-pointer">
                        Siguiente
                      </Button>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      {/* Campos del Paso 2 */}
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" value={formData.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input id="password" type="password" placeholder="Crea una contraseña" value={formData.password} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                        <Input id="confirmPassword" type="password" placeholder="Confirma tu contraseña" value={formData.confirmPassword} onChange={handleInputChange} />
                      </div>
                      
                      <div className="flex justify-between mt-6">
                        <Button type="button" variant="outline" className="cursor-pointer" onClick={handlePreviousStep}>
                          Volver
                        </Button>
                        <Button type="submit" className="bg-club-primary hover:bg-club-dark text-black cursor-pointer hover:text-white">
                          Finalizar y Confirmar
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Paso de Confirmación: currentStep === TOTAL_STEPS + 1 */}
                  {currentStep === TOTAL_STEPS + 1 && (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      {/* El título ya se maneja arriba con stepConfirmationTitle */}
                      <p className="text-gray-600 mb-1">
                        Hemos enviado un correo de confirmación a:
                      </p>
                      <p className="font-semibold text-club-dark mb-4">{formData.email}</p>
                      <p className="text-gray-600 mb-6">
                        Por favor, revisa tu bandeja de entrada (y la carpeta de spam) para verificar tu cuenta.
                      </p>
                      <Button 
                        onClick={() => {
                          setCurrentStep(1);
                          setFormData({
                            firstName: '',
                            lastName: '',
                            dni: '',
                            phone: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                          });
                          setNumberOfFamilyMembers(0);
                        }}
                        className="w-full bg-club-secondary hover:bg-club-secondary/90 text-white">
                        Realizar otra solicitud
                      </Button>
                       <p className="text-xs text-gray-500 text-center mt-6">
                        Gracias por unirte al Club Central Argentino Olimpico.
                      </p>
                    </div>
                  )}

                   {currentStep <= TOTAL_STEPS && (
                     <p className="text-xs text-gray-500 text-center mt-4">
                      Al enviar este formulario, aceptas los términos y condiciones del Club Central Argentino Olimpico.
                    </p>
                   )}
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