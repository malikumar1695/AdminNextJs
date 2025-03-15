
'use client';

import { persistor, store } from "@/api/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface props {
    children: React.ReactNode
}

const ReactQueryProvider = ({ children }: props) => {
    const [queryClient] = useState(() => new QueryClient());

    return <Provider store={store}><PersistGate loading={null} persistor={persistor}> <QueryClientProvider client={queryClient}>{children}</QueryClientProvider></PersistGate></Provider>
}

export default ReactQueryProvider;