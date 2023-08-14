import Button from '../reusable/Button';
//import FormInput from '../reusable/FormInput';
import { useState } from 'react';

const ContactForm = () => {
	//testing sending email
	const [email, setEmail] = useState('');
	const [name,setName]=useState('');
	const [subject, setSubject] = useState('');
	const [text, setText] = useState('');
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  
	  try {
		const response = await fetch('http://localhost:3001/send-email', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ name,email, subject, text }),
		});
  
		if (response.status === 200) {
		  alert('Form Submitted successfully.Dickson Will get back to you');
		} else {
		  alert('Error sending email');
		}
	  } catch (error) {
		console.error('Error sending email:', error);
	  }
	};




	//end sending email


	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					{/* <FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						value={name} // Make sure this is correctly passed from the state
						onChange={(e) => setName(e.target.value)}
						placeholderText="Your Name"
						ariaLabelName="Name"
					/> */}
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Full Name
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="name"
							name="name"
							placeholder='Full Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							aria-label="Full Name"
						/>
					</div>

					{/* <FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						value={email}
						onChange={(e) =>setEmail(e.target.value)}
						placeholderText="Your email"
						ariaLabelName="Email"
					/> */}
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="email"
							name="email"
							placeholder='Email'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							aria-label="Email"
						/>
					</div>
					{/* <FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						value={subject}
						onChange={(e) =>setSubject(e.target.value)}
						placeholderText="Subject"
						ariaLabelName="Subject"
					/> */}
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Subject
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							placeholder='Subject'
							type='text'
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							aria-label="Subject"
						/>
					</div>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							value={text}
							onChange={(e) => setText(e.target.value)}
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
