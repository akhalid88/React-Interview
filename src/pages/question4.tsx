import { Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

function update_age(bday) {
	//convert bday param to Date format
	let birthdate = new Date(bday);
	// get today's date
	let today = new Date();
	//get age difference in year
	let age = today.getFullYear() - birthdate.getFullYear();
	// get differnce in months
	let month = today.getMonth() - birthdate.getMonth();
	// get difference in day of month
	let day = today.getDate() - birthdate.getDate();
	// if month is negative adjust age by -1
	if (month < 0 || (month === 0 && day < 0)) {
		age--;
	}

	return age;

}


export default function Question3() {
	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go Question 3</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Home</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 4</Typography>
		<Typography>In src/pages/dataBase create a trigger/function which will calculate the age on insert or modify given the birthday</Typography>
	</Container>;
}
