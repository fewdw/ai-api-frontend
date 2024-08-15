'use client';
import React from 'react'
import { useParams } from 'next/navigation';
import Header from '@/app/components/Header/Header';


const page = () => {
    const params = useParams();
  return (
    <div>
        
        <p>{params.id}</p>
        
    </div>
  )
}

export default page