import { createBrowserRouter, RouterProvider } from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from '../root/Root';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import Tool from '../pages/tool/Tool';
import Project from '../pages/project/Project';
import About from '../pages/about/About';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component:Home
      },
      {
        path: 'contact',
        Component:Contact
      },
      {
        path: 'tool',
        Component:Tool
      },
      {
        path: 'project',
        Component:Project
      },
      {
        path: 'about',
        Component:About
      }
    ]
  },
]);



