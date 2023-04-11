import Head from 'next/head';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			<Head>
				<title>Next To Do List</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main>
				<div className='container mx-auto px-[15px] py-[15px]'>
					{children}
				</div>
			</main>
		</>
	);
};

export default Layout;