import React from 'react'
import Link from 'next/link';
import { ProjectNavbar } from '../components/ProjectNavbar';
import { ProjectHead } from '../components/ProjectHead';
import { ProjectMain } from '../components/ProjectMain';
import { ProjectFooter } from '../components/ProjectFooter';

export default function Notioncheck() {
  return (
    <div>
      <ProjectNavbar/>
      <div className='flex items-center justify-center'>
        <span>Page coming Soon</span>
      </div>
      {/* <ProjectHead/>
      <ProjectMain/>
      <ProjectFooter/> */}
    </div>
  );
}

