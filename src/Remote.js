
/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, Flex, jsx, Text } from 'theme-ui';
import { useState } from 'react'
import { Link } from './icons';

export const Remote = () => {
    const [style, setStyle] = useState({ backgroundColor: 'white' })
    return (
        <Flex
            onMouseEnter={e => {
                setStyle({
                    backgroundColor: '#666CFF'
                })
            }}
            onMouseLeave={e => {
                setStyle({
                    backgroundColor: 'white'
                })
            }}>
            <Flex sx={{
                paddingTop: '10px',
                paddingBottom: '10px',
            }}>
                <Flex sx={{
                    borderRadius: '50%',
                    marginLeft: '20px',
                    width: '22px',
                    height: '22px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    style={style}>
                    <Flex sx={{
                        color: 'dark3'
                    }}>
                        <Link />
                    </Flex>
                </Flex>
                <Flex sx={{
                    flexDirection: 'column',
                    marginLeft: '10px'
                }}>
                    <Text sx={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}>ReactJS is just a library</Text>
                    <Text sx={{
                        fontSize: 14,
                        color: '#96969D',
                        wordWrap: 'break-word',
                        width: '239px'
                    }}>A simple activity description goes here</Text>
                </Flex>
                <Flex sx={{
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        color: 'white',
                        marginLeft: '40px'
                    }}>
                        <Text sx={{
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}>Jan</Text>
                        <Text sx={{
                            fontWeight: 'bold',
                            fontSize: '17px'
                        }}>24</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
