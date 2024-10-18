'use client';

import { FarmCardProps } from '@/types';
import { useEffect, useState } from 'react';
import FarmCard from './farm-card';
import { CartDialog } from './cart-dialog';
import { loadFarmsData } from '@/lib/utils';


export const EmptyFarm = () => (
    <div className="flex flex-col text-center py-14 gap-4 items-center">

        <div className="flex flex-col gap-2">
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                We are constantly updating and expanding our farms catelogue to help accommodate diverse crops and animals.
                Kindly check back here soon for the latest on our list. Thank you.
            </p>
        </div>
    </div>

);


const FarmsList = ({ start = 0, limit }: { start: number, limit?: number }) => {

    const [farms, setFarms] = useState<FarmCardProps[]>([]);
    useEffect(() => {
        (async () => {
            setFarms(await loadFarmsData(start, limit));
        })()
    }, [start, limit]);


    if (farms && farms.length) {
        return (
            <>
                <CartDialog />
                <div className="grid pt-5 text-left grid-cols-1 lg:grid-cols-4 w-full gap-4">
                    {farms.map((farm: FarmCardProps, idx: number) => (<FarmCard key={idx} {...farm} />))}
                </div>
            </>
        )
    }

    return (<EmptyFarm />)
}

export default FarmsList;