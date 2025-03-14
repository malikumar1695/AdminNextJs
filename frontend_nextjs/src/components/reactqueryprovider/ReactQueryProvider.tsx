
'use client';

import { store } from "@/api/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";

interface props {
    children: React.ReactNode
}

const ReactQueryProvider = ({ children }: props) => {
    const [queryClient] = useState(() => new QueryClient());

    return <Provider store={store}> <QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Provider>
}

export default ReactQueryProvider;