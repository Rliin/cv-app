import { Circle, Github, Linkedin, MapPin } from 'lucide-react';
import Image from 'next/image';

const Introduction = () => {
    return (
        <div className="flex justify-around gap-4 p-35 bg-[#030712] text-gray-400">
            <div className="flex flex-col gap-y-15">
                <div>
                <h1 className="text-5xl font-bold text-white">Hi, I'm Burkay 👋</h1>
                <p className="mt-4">I'm a front end developer with a passion for creating user-friendly and efficient web applications.</p>
                </div>
                <div className="**:flex **:flex-row [&>p]:space-y-4">
                    <p><MapPin/>Eskişehir, Türkiye</p>
                    <p><Circle fill="#09BC78" color="#09BC78"/>Available for opportunities</p>
                </div>
                <div className="flex flex-row gap-4">
                    <Github />
                    <Linkedin />
                </div>
            </div>
            <div className="*:rounded-lg">
                <Image src="/PhotoIntroduction.jpg" alt="Profile" width={300} height={300} />
            </div>
        </div>
    )
}

export default Introduction;