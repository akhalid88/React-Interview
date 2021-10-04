import React from 'react';
import Link from 'next/link';
import {
	Button, Container, Divider, FormControl, FormHelperText, Grid, InputLabel,
	List, ListItem, ListItemButton, ListItemText, MenuItem, Select, TextField, Typography
} from '@material-ui/core';
import { Form, Field, ErrorMessage, useFormik, Formik } from 'formik';
import FormikSelect, { FormikSelectItem } from '../components/FormikSelect';
import { DateTimePickerView } from '@material-ui/lab/DateTimePicker/shared';

interface FormValues {
	name: string;
	date: string;
	active: boolean;
	age: number;
}

const initialValues: FormValues = {
	name: '',
	date: '',
	active: false,
	age: 0
}

// create array of objects for Age selector
let selectAge: FormikSelectItem[] = []
for (let i = 1; i <= 70; i++) {
	let tempObj = { "label": i, "value": i };
	selectAge.push(tempObj);
}

console.log(selectAge);

export default function Question1() {
	const handleSubmit = (values: FormValues): void => {
		alert(JSON.stringify(values, null, 2));
	};

	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Back to Home</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>

		<Typography variant='h5'>Question 1</Typography>
		<Typography>Design a form with Formik and Material UI</Typography>
		<Typography>Contains the following items: </Typography>
		<List>
			<ListItem>
				<ListItemText>Name</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Date (datetime)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Active (boolean switch)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Age (select from 1 to 70)</ListItemText>
			</ListItem>
		</List>

		<div>
			<h1>A formik form forms a formik</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({ dirty, isValid }) => {
					return (
						<Form>
							{/* NAME FIELD */}
							<Field
								as={TextField}
								label="Test"
								name="name"
								type="TextField"
								required
								autocomplete="off"
							/>

							{/* DATE FIELD */}
							<div>
								<label>Date</label>
								<Field
									name="date"
									type="date"
								/>
							</div>

							{/* ACTIVE FIELD */}
							{/* <div>
								<label>Active</label>
								<label>
									<Field type="switch" name="active" value="active" />
								</label>
							</div> */}

							<label>
								<Field type="radio" name="active" value="active" />
								Active
							</label>
							<label>
								<Field type="radio" name="active" value="inactive" />
								Inactive
							</label>

							{/* AGE FIELD */}
							<div>
								<FormikSelect
									name="age"
									items={selectAge}
									label="Age"
									required />
							</div>

							<button type="submit" disabled={!dirty || !isValid}>
								Submit
							</button>
						</Form>
					)
				}}
			</Formik>
		</div>
	</Container >;
}
