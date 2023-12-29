import LinkButton from '@/app/components/link-button';
import BasicForm from '@/app/components/react-hook-form/basic-form';
import { FormPageProvider } from '@/app/context/use-form-page-context';

function page() {
    return (
        <FormPageProvider>
            <div className="mx-auto h-full max-w-[520px]">
                <LinkButton href={'/'} text={'Back to home'} isBack={true} />
                <main className="py-6">
                    <BasicForm />
                </main>
            </div>
        </FormPageProvider>
    );
}

export default page;
