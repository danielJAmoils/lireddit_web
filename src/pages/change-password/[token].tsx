import React from "react"
import { NextPage } from "next"
import { Wrapper } from "../../components/Wrapper"
import { Formik, Form } from "formik"
import { InputField } from "../../components/InputField"
import { Button } from "@chakra-ui/core"

const ChangePassword: NextPage<{ token: string }> = () => {
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{ newPassword: "" }}
                onSubmit={async (values) => {
                    // const response = await login(values)
                    // if (response.data?.login.errors) {
                    //     setErrors(toErrorMap(response.data.login.errors))
                    // } else if (response.data?.login.user) {
                    //     //worked
                    //     router.push("/")
                    // }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            name="newPassword"
                            placeholder="new password"
                            label="New Password"
                            type="password"
                        />
                        <Button
                            mt={4}
                            type="submit"
                            variantColor="teal"
                            isLoading={isSubmitting}
                        >
                            Change Password
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

ChangePassword.getInitialProps = ({ query }) => {
    return {
        token: query.token as string
    }
}

export default ChangePassword
