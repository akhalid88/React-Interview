import { Button, Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { handleBreakpoints } from '@material-ui/system';
import { isObjectLike } from 'lodash';

export default function Question2() {

	interface apiObject {
		id: string;
		name: string;
	}

	let apiObj = { id: "0101", name: "john doe" }

	function nameConvert(obj: apiObject) {
		console.log(obj.name);
	}

	const nameConverter = (obj) => {
		if (obj.id && obj.name) {
			// console.log(obj)
			//get key names and assign name to id
			obj.id = Object.getOwnPropertyNames(obj)[1];
			//delete old name key
			delete obj.name;

			console.log(obj);
			return obj;
		} else {
			console.log("Missing Id or name field");
		}
	}

	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/question1' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 1</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 3</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 2</Typography>
		<Typography>
			Create an api function in NextJS that takes an object with this type {'{id: string, name: test}'}[]
			and converts it to {'{id: name}'}
		</Typography>
		<Typography>
			Perform error handling so that any object without that shape will throw an error.
		</Typography>
		<Typography>
			Call the function from a button press
		</Typography>
		<Typography>
			You can use any library for this
		</Typography>

		<Button type="submit"
			// variant=" contained"
			onClick={() => {
				nameConverter(apiObj);
			}}
		>
			Click
		</Button>
	</Container>;
}
