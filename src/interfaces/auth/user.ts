import type Id from '@/types/id'

interface User {
  'id': Id,
  'image_url': string,
  'is_superuser': boolean,
  'last_login': Date,
  'created_at': Date,
  'updated_at': Date,
  'time_zone': string,
  'email': string,
  'phone': string,
  'full_name': string,
  'bio': string,
  'profile_image': string,
  'birth_date': Date | null,
  'sex': 'M' | 'F' | 'NB',
  'auth_provider': 'phone' | 'google' | 'apple' | 'facebook',
  'type': 'admin' | 'user',
  'status': 'active' | 'blocked' | 'inactive_for_a_month',
  'payment_status': 'free' | 'basic' | 'premium',
  'is_staff': boolean,
  'is_active': boolean,
  'date_joined': Date,
  'groups': number[],
  'user_permissions': number[],
  [key: string]: any
}

export default User