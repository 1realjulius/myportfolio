import React from 'react'
import Link from 'next/link';
import { Clock } from 'react-feather'
import { ProjectNavbar } from '../components/ProjectNavbar';
import { ProjectHead } from '../components/ProjectHead';
import { ProjectMain } from '../components/ProjectMain';
import { ProjectFooter } from '../components/ProjectFooter';

export default function Notioncheck() {
  return (
    <div>
      <ProjectNavbar/>
      <div className='flex items-center justify-center space-x-2'>
        <Clock className='text-gray-400' size={35} />
        <span className='text-xl'>Page coming Soon</span>
      </div>
      {/* <ProjectHead/>
      <ProjectMain/>
      <ProjectFooter/> */}
    </div>
  );
}

