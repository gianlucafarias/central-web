export type MembershipStatusPrisma = 'PENDING_VALIDATION' | 'ACTIVE' | 'INACTIVE'

export interface AdminUserView {
  id: string
  numeroSocio: string
  firstName: string
  lastName: string
  nombreCompleto: string
  dni: string
  phone: string
  email: string
  image?: string | null
  createdAt: Date
  status: string
  role: string
  
  familyMembersCount: number
  familyHeadId?: string | null

  lastPaymentAmount?: number | null
  lastPaymentDate?: Date | null
  lastPaymentStatus?: string | null
}

const user1_id = 'user_1_head';
const user5_id = 'user_5_head';

export const mockAdminUsers: AdminUserView[] = [
  { 
    id: user1_id,
    numeroSocio: user1_id,
    firstName: 'Juan',
    lastName: 'Pérez',
    nombreCompleto: 'Juan Pérez (Titular)',
    dni: '30123456',
    phone: '+5493411234567',
    email: 'juan.perez@example.com',
    image: '/placeholder-avatar.png',
    createdAt: new Date('2023-03-01T10:00:00Z'),
    status: 'ACTIVE',
    familyMembersCount: 2, 
    familyHeadId: null,
    lastPaymentAmount: 3500, 
    lastPaymentDate: new Date('2024-10-10T10:00:00Z'),
    role: 'USER',
  },
  {
    id: 'user_1_fam1',
    numeroSocio: 'user_1_fam1',
    firstName: 'Juana',
    lastName: 'Pérez',
    nombreCompleto: 'Juana Pérez (Familiar)',
    dni: '50123456',
    phone: '+5493411234500',
    email: 'juana.perez@example.com',
    image: '/placeholder-avatar.png',
    createdAt: new Date('2023-03-01T10:00:00Z'),
    status: 'ACTIVE',
    familyMembersCount: 0,
    familyHeadId: user1_id,
    lastPaymentAmount: null,
    lastPaymentDate: null,
    role: 'USER',
  },
  {
    id: 'user_1_fam2',
    numeroSocio: 'user_1_fam2',
    firstName: 'Jorgito',
    lastName: 'Pérez',
    nombreCompleto: 'Jorgito Pérez (Familiar)',
    dni: '51123456',
    phone: '+5493411234501',
    email: 'jorgito.perez@example.com',
    image: null,
    createdAt: new Date('2023-03-01T10:00:00Z'),
    status: 'ACTIVE',
    familyMembersCount: 0,
    familyHeadId: user1_id,
    lastPaymentAmount: null,
    lastPaymentDate: null,
    role: 'USER',
  },
  {
    id: 'user_2_individual',
    numeroSocio: 'user_2_individual',
    firstName: 'Maria',
    lastName: 'Garcia',
    nombreCompleto: 'Maria Garcia (Individual)',
    dni: '32789012',
    phone: '+5493422345678',
    email: 'maria.garcia@example.com',
    image: null,
    createdAt: new Date('2024-08-15T11:00:00Z'),
    status: 'INACTIVE', 
    familyMembersCount: 0,
    familyHeadId: null,
    lastPaymentAmount: 2500,
    lastPaymentDate: new Date('2024-08-10T10:00:00Z'),
    role: 'USER',
  },
  {
    id: 'user_3_individual',
    numeroSocio: 'user_3_individual',
    firstName: 'Carlos',
    lastName: 'López',
    nombreCompleto: 'Carlos López (Individual)',
    dni: '28555666',
    phone: '+5493413456789',
    email: 'carlos.lopez@example.com',
    image: '/placeholder-avatar.png',
    createdAt: new Date('2024-10-01T09:00:00Z'),
    status: 'ACTIVE',
    familyMembersCount: 0,
    familyHeadId: null,
    lastPaymentAmount: 3000,
    lastPaymentDate: new Date('2024-11-05T10:00:00Z'),
    role: 'USER',
  },
  {
    id: 'user_4_individual',
    numeroSocio: 'user_4_individual',
    firstName: 'Ana',
    lastName: 'Martinez',
    nombreCompleto: 'Ana Martinez (Individual)',
    dni: '35123987',
    phone: '+5491145678900',
    email: 'ana.martinez@example.com',
    image: null,
    createdAt: new Date('2023-06-20T15:00:00Z'),
    status: 'PENDING_VALIDATION',
    familyMembersCount: 0,
    familyHeadId: null,
    lastPaymentAmount: null,
    lastPaymentDate: null,
    role: 'USER',
  },
  {
    id: user5_id,
    numeroSocio: user5_id,
    firstName: 'Luis',
    lastName: 'Rodriguez',
    nombreCompleto: 'Luis Rodriguez (Titular)',
    dni: '25987654',
    phone: '+5493515678901',
    email: 'luis.rodriguez@example.com',
    image: '/placeholder-avatar.png',
    createdAt: new Date('2023-01-10T12:00:00Z'),
    status: 'INACTIVE', 
    familyMembersCount: 1, 
    familyHeadId: null,
    lastPaymentAmount: 2000, 
    lastPaymentDate: new Date('2024-07-15T10:00:00Z'),
    role: 'USER',
  },
  {
    id: 'user_5_fam1',
    numeroSocio: 'user_5_fam1',
    firstName: 'Luisa',
    lastName: 'Rodriguez',
    nombreCompleto: 'Luisa Rodriguez (Familiar)',
    dni: '52123456',
    phone: '+5493515678999',
    email: 'luisa.rodriguez@example.com',
    image: null,
    createdAt: new Date('2023-01-10T12:00:00Z'),
    status: 'INACTIVE',
    familyMembersCount: 0,
    familyHeadId: user5_id,
    lastPaymentAmount: null,
    lastPaymentDate: null,
    role: 'USER',
  },
]; 