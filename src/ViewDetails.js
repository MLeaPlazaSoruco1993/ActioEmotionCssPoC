/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Text } from 'theme-ui';
export const ViewDetails = () => {
    return (
        <Flex sx={{
            backgroundColor: 'red',
            width: '119px',
            height: '31px',
            transform: 'skew(20deg)',
            boxShadow: '-7px -5px 0 rgba(0,0,0,.5)',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text sx={{
                color: 'white',
                transform: 'skew(-20deg)',
                marginTop: '2px',
            }}>
                View Details
            </Text>
        </Flex>
    )
}
