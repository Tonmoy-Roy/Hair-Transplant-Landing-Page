import Image from 'next/image';
import dr1 from '../../../public/images/Rectangle 61.png'
import dr2 from '../../../public/images/Rectangle 62.png'
import dr3 from '../../../public/images/Rectangle 63.png'
const doctors = [
    {
        name: "Dr. Ahmad Osman",
        title: "ABHRS Certified",
        specialty: "Hair Transplant Surgeon",
        image: <Image src={dr1} alt='' />,
        alt: "Dr. Ahmad Osman - ABHRS Certified"
    },
    {
        name: "Dr. Farid Bilal",
        title: "Hair Restoration Specialist",
        specialty: "FUE & FUT Expert",
        image: <Image src={dr2} alt='' />,
        alt: "Dr. Farid Bilal - Hair Restoration Specialist"
    },
    {
        name: "Dr. Arif Aziz",
        title: "Medical Director",
        specialty: "Trichology & Hair Transplant",
        image: <Image src={dr3} alt='' />,
        alt: "Dr. Arif Aziz - Medical Director"
    },
    {
        name: "Dr. Ahmad Osman",
        title: "ABHRS Certified",
        specialty: "Hair Transplant Surgeon",
        image: <Image src={dr1} alt='' />,
        alt: "Dr. Ahmad Osman - ABHRS Certified"
    },
    {
        name: "Dr. Farid Bilal",
        title: "Hair Restoration Specialist",
        specialty: "FUE & FUT Expert",
        image: <Image src={dr2} alt='' />,
        alt: "Dr. Farid Bilal - Hair Restoration Specialist"
    },
    {
        name: "Dr. Arif Aziz",
        title: "Medical Director",
        specialty: "Trichology & Hair Transplant",
        image: <Image src={dr3} alt='' />,
        alt: "Dr. Arif Aziz - Medical Director"
    },
]
export default doctors;