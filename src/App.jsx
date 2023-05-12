import 'antd/dist/reset.css';
import './App.css'
import Router from './Router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { feedProducts } from './api';
const queryClient = new QueryClient()

// feedProducts()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
