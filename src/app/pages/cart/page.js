import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';

export default function Cart() {

    return (
        <LayoutOne>
            <Breadcrumb nav2={'Shopping Cart'} />
        </LayoutOne>
    );
}