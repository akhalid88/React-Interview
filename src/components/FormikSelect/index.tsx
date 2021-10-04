import React from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Field } from 'formik';

export interface FormikSelectItem {
	label: number;
	value: number;
}

interface FormikSelectProps {
	name: string;
	items: FormikSelectItem[];
	label: string;
	required?: boolean;
}

// interface MaterialUISelectFieldProps extends FieldInputProps<string> {
//   errorString?: string;
//   children: ReactNode;
//   label: string;
//   required: boolean;
// }

// const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
//   errorString,
//   label,
//   children,
//   value,
//   name,
//   onChange,
//   onBlur,
//   required
// }) => {
//   return (
//     <FormControl fullWidth>
//       <InputLabel required={required}>{label}</InputLabel>
//       <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
//         {children}
//       </Select>
//       <FormHelperText>{errorString}</FormHelperText>
//     </FormControl>
//   );
// };

const FormikSelect: React.FC<FormikSelectProps> = ({ name, items, label }) => {
	return (
		<div>
			<Field
				name={name}
				as={Select}
				label={label}
				required
			>
				{items.map(item => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Field>
		</div>
	)
};

export default FormikSelect;