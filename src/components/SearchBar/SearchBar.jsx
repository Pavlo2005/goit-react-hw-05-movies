import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm, Group, Button } from './SearchBar.styled';

const quizSchema = Yup.object().shape({
    serch: Yup.string(),
});

export const SearchBar = ({ onChangeSearch }) => {
    return (
        <Formik
            initialValues={{
                serch: ''
            }}
            validationSchema={quizSchema}
            onSubmit={(values, actions) => {
                onChangeSearch(values.serch);
            }}
        >
            <StyledForm>
                <Group>
                    Serch
                    <Field name="serch" />
                    <ErrMessage name="serch" component="div" />
                </Group>

                <Button type="submit">Serch</Button>
            </StyledForm>
        </Formik>
    );
};
