
import HeroSection from '@/Components/Home/HeroSection';
import HowitworksHome from '@/Components/Home/HowitworksHome';
import NewOnLuxeTable from '@/Components/Home/NewOnLuxeTable';
import TableForToday from '@/Components/Home/TableForToday';
import TopRated from '@/Components/Home/TopRated';
import Tranding from '@/Components/Home/Tranding';
import React from 'react';

const Page = () => {
    return (
        <div>
            <HeroSection />
            <Tranding />
            <TopRated />
            <NewOnLuxeTable />
            <TableForToday />
            <HowitworksHome />

        </div>
    );
}

export default Page;
