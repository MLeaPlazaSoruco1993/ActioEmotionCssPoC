
/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, Flex, jsx, Text } from 'theme-ui';
import { useState } from 'react'
import { Location } from './icons';

export const Activity = () => {
    const [style, setStyle] = useState({ backgroundColor: 'white' })
    return (
        <Flex
            onMouseEnter={e => {
                setStyle({
                    backgroundColor: '#1CEBB7'
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
                <Box sx={{
                    borderRadius: '50%',
                    marginLeft: '20px',
                    width: '22px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    style={style}>
                    <Flex sx={{
                        color: 'dark3'
                    }}>
                        <Location />
                    </Flex>
                </Box>
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
                        marginLeft: '40px',
                        color: 'white'
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
