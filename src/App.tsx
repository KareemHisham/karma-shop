import { Provider } from 'react-redux'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppRouter } from "@/components/index";
import { Toaster } from "@/components/ui/sonner"
import store from '@/store/store.ts'
// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <ReactQueryDevtools />
      <Toaster richColors />
    </QueryClientProvider>
  )
}

export default App