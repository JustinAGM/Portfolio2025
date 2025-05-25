'use client'
import { Input, Textarea } from "@mui/joy";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

function SubmitForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formBody = new FormData();
        for (const key in formData) formBody.append(key, formData[key]);
        formBody.append('_captcha', 'false');
        formBody.append('_subject', 'New Contact Form Submission');

        try {
            const response = await fetch('https://formsubmit.co/ajax/justin.a.g.machica@gmail.com', {
                method: 'POST',
                body: formBody,
                headers: { 'Accept': 'application/json' },
            });
            if (response.ok) {
                toast.success('Thanks for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                toast.error('Oops, something went wrong. Please try again later.');
            }
        } catch {
            toast.error('Network error. Please try again later.');
        }
    };

    return (
        <div>
            <div className="py-8">
                <h1 className="text-xl text-cyan-950 text-left text-shadow-lg text-shadow-cyan-500 ">
                    Send an Email directly:
                </h1>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg sm:px-0 "
            >
                <Input
                    name="name"
                    required
                    placeholder="Full Name"
                    size="md"
                    variant="outlined"
                    className="mb-4 w-full"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    size="md"
                    variant="outlined"
                    className="mb-4 w-full"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    size="md"
                    variant="outlined"
                    className="mb-4 w-full"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <Textarea
                    name="message"
                    required
                    placeholder="Message"
                    minRows={4}
                    variant="outlined"
                    className="mb-8 w-full"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="inline-block w-full sm:w-auto text-sm text-white bg-cyan-700 hover:bg-cyan-900 px-4 py-2 rounded-full transition mb-10 hover:translate-x-7 cursor-pointer"
                >
                    💌 Send Message
                </button>
            </form>



            <Toaster position="bottom-left" />
        </div>
    );
}

export default SubmitForm;
