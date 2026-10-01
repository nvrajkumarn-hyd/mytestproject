import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {StoreProvider} from '@/components/StoreProvider';
import WhatsAppButton from '@/components/WhatsAppButton';
import {siteConfig} from '@/lib/config';
export const metadata:Metadata={title:{default:`${siteConfig.name} | ${siteConfig.tagline}`,template:`%s | ${siteConfig.name}`},description:siteConfig.supportLine,openGraph:{title:siteConfig.name,description:siteConfig.supportLine,type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><Header/><main className="min-h-screen">{children}</main><Footer/><WhatsAppButton/></StoreProvider></body></html>}
