const K='#29232B',C={mint:'#C8FAF7',tur:'#48E6C6',mag:'#A90B70',pink:'#D84C9D',lime:'#9BF52F',pur:'#64106E',yel:'#FFD93D',wh:'#fff'};
const _b=(n,a,b)=>{let p=[];for(let i=0;i<n*2;i++){const r=i%2?a:b,t=Math.PI*i/n;p.push((50+r*Math.sin(t)).toFixed(1)+','+(50-r*Math.cos(t)).toFixed(1))}return p.join(' ')};
const ART={
blob:a=>`<path d="M16 32C26 8 68 4 85 24C99 42 94 72 74 86C54 99 22 92 11 70C5 55 8 43 16 32Z" fill="${a}"/>`,
burst:a=>`<polygon points="${_b(11,36,47)}" fill="${a}"/>`,
tri:a=>`<polygon points="50,6 94,86 6,86" fill="${a}"/>`,
robot:(a,b)=>`<path d="M50 28V14"/><circle cx="50" cy="12" r="6" fill="${b}"/><rect x="14" y="40" width="9" height="20" rx="4" fill="${b}"/><rect x="77" y="40" width="9" height="20" rx="4" fill="${b}"/><rect x="22" y="28" width="56" height="50" rx="14" fill="${a}"/><circle cx="38" cy="50" r="9" fill="#fff"/><circle cx="62" cy="50" r="9" fill="#fff"/><circle cx="39" cy="51" r="3.5" fill="${K}"/><circle cx="61" cy="51" r="3.5" fill="${K}"/><rect x="38" y="65" width="24" height="7" rx="3.5" fill="${K}"/>`,
monster:(a,b)=>`<polygon points="26,30 34,8 44,26" fill="${b}"/><polygon points="52,24 62,6 72,26" fill="${b}"/><path d="M14 62C10 32 38 18 62 24C86 30 92 54 84 74C74 94 22 94 14 62Z" fill="${a}"/><circle cx="58" cy="50" r="13" fill="#fff"/><circle cx="61" cy="50" r="5.5" fill="${K}"/><path d="M26 72Q50 88 74 72" fill="none"/>`,
math:(a,b)=>`<polygon points="14,84 44,22 74,84" fill="${a}"/><circle cx="72" cy="30" r="17" fill="${b}"/><path d="M20 22H40M30 12V32" stroke-width="6"/>`,
physics:(a,b)=>`<circle cx="50" cy="50" r="26" fill="${a}"/><ellipse cx="50" cy="52" rx="44" ry="13" transform="rotate(-20 50 52)" fill="none" stroke-width="5"/><circle cx="84" cy="20" r="7" fill="${b}"/>`,
chem:(a,b)=>`<path d="M38 12H62M42 12V42L16 82Q12 90 22 90H78Q88 90 84 82L58 42V12" fill="#fff"/><path d="M28 68H72L84 82Q88 90 78 90H22Q12 90 16 82Z" fill="${a}"/><circle cx="46" cy="52" r="5" fill="${b}"/><circle cx="62" cy="30" r="6" fill="${b}"/>`,
bio:(a,b)=>`<path d="M14 84C10 40 40 14 86 14C88 58 62 88 14 84Z" fill="${a}"/><path d="M20 80L62 38"/><circle cx="78" cy="78" r="13" fill="${b}"/><circle cx="78" cy="78" r="4" fill="${K}"/>`,
eng:(a,b)=>`<path d="M14 18H86V64H58L38 84V64H14Z" fill="${a}"/><text x="50" y="52" font-family="Fredoka,Arial Rounded MT Bold,sans-serif" font-size="30" font-weight="700" text-anchor="middle" fill="${K}" stroke="none">Aa</text>`,
indo:(a,b)=>`<path d="M10 22L50 30L90 22V78L50 86L10 78Z" fill="${a}"/><path d="M50 30V86"/><path d="M20 42L40 46M20 56L40 60M60 46L80 42M60 60L80 56" stroke-width="3"/><circle cx="78" cy="18" r="8" fill="${b}"/>`,
hist:(a,b)=>`<polygon points="8,38 50,12 92,38" fill="${b}"/><rect x="16" y="42" width="14" height="36" fill="${a}"/><rect x="43" y="42" width="14" height="36" fill="${a}"/><rect x="70" y="42" width="14" height="36" fill="${a}"/><rect x="8" y="78" width="84" height="12" rx="3" fill="${b}"/>`,
geo:(a,b)=>`<circle cx="46" cy="54" r="34" fill="${a}"/><ellipse cx="46" cy="54" rx="14" ry="34" fill="none"/><path d="M12 54H80" /><path d="M76 8C86 8 90 16 90 22C90 32 76 44 76 44C76 44 62 32 62 22C62 16 66 8 76 8Z" fill="${b}"/>`,
trophy:(a,b)=>`<path d="M30 14H70V40Q70 62 50 64Q30 62 30 40Z" fill="${a}"/><path d="M30 22H16Q16 44 32 46M70 22H84Q84 44 68 46" fill="none"/><rect x="44" y="64" width="12" height="14" fill="${a}"/><rect x="28" y="78" width="44" height="12" rx="4" fill="${b}"/>`,
flame:(a,b)=>`<path d="M50 8C58 28 78 38 76 62C74 86 28 88 24 62C22 48 34 42 38 28C44 36 46 30 50 8Z" fill="${a}"/><path d="M50 50C56 60 62 64 60 74C58 82 42 82 40 72C40 64 46 60 50 50Z" fill="${b}"/>`,
bulb:(a,b)=>`<circle cx="50" cy="40" r="26" fill="${a}"/><rect x="38" y="66" width="24" height="16" rx="4" fill="${b}"/><path d="M42 90H58M50 40V54M43 36L50 44L57 36" fill="none"/>`,
star:a=>`<polygon points="50,6 62,36 94,38 69,58 78,90 50,72 22,90 31,58 6,38 38,36" fill="${a}"/>`,
check:(a)=>`<circle cx="50" cy="50" r="40" fill="${a}"/><path d="M30 52L45 66L72 36" fill="none" stroke-width="9"/>`,
cross:(a)=>`<circle cx="50" cy="50" r="40" fill="${a}"/><path d="M34 34L66 66M66 34L34 66" fill="none" stroke="#fff" stroke-width="9"/>`,
lock:(a,b)=>`<path d="M30 44V32Q30 12 50 12Q70 12 70 32V44" fill="none" stroke-width="7"/><rect x="20" y="42" width="60" height="46" rx="12" fill="${a}"/><circle cx="50" cy="64" r="6" fill="${K}"/>`,
home:(a,b)=>`<polygon points="50,10 92,46 8,46" fill="${b}"/><rect x="18" y="44" width="64" height="44" rx="6" fill="${a}"/><rect x="42" y="62" width="16" height="26" fill="${b}"/>`,
compass:(a,b)=>`<circle cx="50" cy="50" r="40" fill="${a}"/><polygon points="64,36 54,54 36,64 46,46" fill="${b}"/>`,
bolt:(a,b)=>`<polygon points="58,6 18,56 46,56 38,94 82,40 54,40" fill="${a}"/>`,
bars:(a,b)=>`<rect x="12" y="50" width="20" height="40" rx="4" fill="${b}"/><rect x="40" y="20" width="20" height="70" rx="4" fill="${a}"/><rect x="68" y="38" width="20" height="52" rx="4" fill="${b}"/>`,
face:(a,b)=>`<circle cx="50" cy="34" r="22" fill="${a}"/><path d="M12 92Q12 58 50 58Q88 58 88 92Z" fill="${b}"/>`
};
const G=s=>`<g stroke="${K}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${s}</g>`;
const frag=(n,a='#fff',b=C.yel)=>G(ART[n](a,b));
const stkF=(n,bg,a,b)=>frag('burst',bg)+`<g transform="translate(22 22) scale(.56)">${frag(n,a,b)}</g>`;
const subF=(n,col)=>frag('blob','#fff')+`<g transform="translate(16 16) scale(.68)">${frag(n,col,C.yel)}</g>`;
const svgw=(f,s,cls='')=>`<svg class="${cls}" width="${s}" height="${s}" viewBox="0 0 100 100">${f}</svg>`;
const ico=(n,s=40,a,b,cls)=>svgw(frag(n,a,b),s,cls),stk=(n,s,bg,a,b,cls)=>svgw(stkF(n,bg,a,b),s,cls);
if(typeof module!='undefined')module.exports={ART,frag,stkF,subF,C,K};
