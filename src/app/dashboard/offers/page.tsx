import OffersSection from '@/components/OfferSectioin'
import React from 'react'

function page() {
    return (
        <div className='my-8'>
            <OffersSection
                offers={[
                    { id: 1, title: "WELLCOME50%", description: "Get instant 50% off", validTill: "25 Oct 2025" },
                    { id: 2, title: "WELLCOME20%", description: "Get instant 20% off", validTill: "30 Nov 2025" },
                ]}
            />

        </div>
    )
}

export default page