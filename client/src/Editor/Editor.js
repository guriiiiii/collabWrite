import React from 'react';
import TextEditor from './TextEditor';
import DocsbarMenu from '../Docsbar/DocsbarMenu';

export default function Editor() {
  return (
    <div>
        <DocsbarMenu/>
        <TextEditor/>
    </div>
  )
}
