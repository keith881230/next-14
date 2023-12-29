import Image from 'next/image';

export const PWDvisibleIcon = () => {
    return <Image className="prevent-image-drag" src={'/eye-open.svg'} width={20} height={20} alt="visible" />;
};
export const PWDInvisibleIcon = () => {
    return <Image className="prevent-image-drag" src={'/eye-closed.svg'} width={20} height={20} alt="invisible" />;
};
