import fetchWrapper from '@/helpers/fetchWrapper'
import { DASHBOARD_URL } from '@/constants/auth'

import Support from '@/api/support'

export default {
  support: Support(fetchWrapper, DASHBOARD_URL)
}