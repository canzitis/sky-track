import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { Home } from './App.tsx'
import Layout from './components/Layout.tsx'
import { ThemeProvider } from './components/providers/theme/ThemeProvider.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to='/home' replace />} />
					<Route element={<Layout />}>
						<Route path='/home' element={<Home />} />
						<Route path='/flights' element={<div>flights</div>} />
						<Route path='/about' element={<div>about</div>} />
						<Route path='/contacts' element={<div>contacts</div>} />
						<Route path='/like' element={<div>like</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)
