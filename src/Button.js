/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Text } from 'theme-ui';

export const Button = () => {
    return (
        <Flex sx={{
            backgroundColor: 'red',
            width: '81px',
            height: '24px',
            borderRadius: 13,
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: 'darkRed'
            }
        }}>
            <Text sx={{
                margin: '1px',
                fontSize: 12,
                fontWeight: 'bold',
                color: 'white'
            }}>Subscribe</Text>
        </Flex>
    )
}
