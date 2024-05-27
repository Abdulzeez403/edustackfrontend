// components/AdminForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button'; // Adjust the import according to your project structure
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormField } from '@/app/components/input/textInput';

interface StaffFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const StaffFormValues = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password too short!')
        .required('Required'),
    confirmPassword: Yup.string()
        .required('Required'),
});

export const StaffForm: React.FC = () => {
    const initialValues: StaffFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values: StaffFormValues) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={StaffFormValues}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className='flex gap-x-10'>
                        <FormField label="First Name" name="firstName" />
                        <FormField label="Last Name" name="lastName" />
                    </div>

                    <FormField label="Email" name="email" type="email" />
                    <FormField label="Password" name="password" type="password" />
                    <FormField label="Confirm Password" name="confirmPassword" type="password" />
                    <div>
                        <Button type="submit" className="w-80 mt-4" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
