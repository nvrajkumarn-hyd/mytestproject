
'use client';
import {useState} from 'react';import {ChevronDown} from 'lucide-react';import {faqs} from '@/data/faqs';
export default function FAQ(){const[open,setOpen]=useState(0);return <div className="grid gap-3">{faqs.map(([q,a],i)=><div key={q} className="overflow-hidden rounded-2xl border border-[#eadde2] bg-white"><button onClick={()=>setOpen(open===i?-1:i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-ink"><span>{q}</span><ChevronDown className={`shrink-0 transition ${open===i?'rotate-180':''}`} size={18}/></button>{open===i&&<div className="px-5 pb-5 text-sm leading-6 text-slate-600">{a}</div>}</div>)}</div>}
