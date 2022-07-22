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
      {/* <ProjectHead/>
      <ProjectMain/>
      <ProjectFooter/> */}
    </div>
  );
}

