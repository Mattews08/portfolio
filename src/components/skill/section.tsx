import React, {ReactNode} from "react";
import { Center } from "@chakra-ui/react";
import Container from "./container";

type IProps = {
    full: any
    children: ReactNode
    rest?: any
}

const Section = (props: IProps) => {
    const { full, children, ...rest } = props;
    return (
        <Center as="section" {...rest} w="100%">
            {full ? children : <Container>{children}</Container>}
        </Center>
    );
};

export default Section;