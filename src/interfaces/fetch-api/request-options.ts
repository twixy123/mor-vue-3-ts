import type FetchMethod from '@/types/fetch-method'

interface RequestOptions extends RequestInit {
  method: FetchMethod,
  headers: Headers
  body?: string
}

export default RequestOptions