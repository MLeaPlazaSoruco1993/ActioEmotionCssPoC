
/** @jsxRuntime classic */
/** @jsx jsx */
import { Image, Box, Flex, jsx, Text } from 'theme-ui';
import { useState } from 'react'
import { Activity } from './Activity';
import { Remote } from './Remote';
import { Button } from './Button';
import { ViewDetails } from './ViewDetails';

export const MultipleEvent = () => {
    const [style, setStyle] = useState({ display: 'none' })
    return (
        <Flex>
            <Box sx={{
                width: '400px',
                height: '630px',
                backgroundColor: 'dark3',
            }}>
                <Box
                    sx={{ position: 'relative' }}
                    onMouseEnter={e => {
                        setStyle({
                            display: 'inline-block'
                        })
                    }}
                    onMouseLeave={e => {
                        setStyle({ display: 'none' })
                    }}
                >
                    <Image
                        src='https://mk0javascriptfoyi7o2.kinstacdn.com/wp-content/uploads/2019/10/2-3.png'
                        variant='eventThumbnail'
                    />
                    <Box sx={{
                        position: 'absolute',
                        bottom: '6px', right: '6px'
                    }}
                        style={style}>
                        <ViewDetails />
                    </Box>
                </Box>
                <Flex sx={{
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        marginLeft: '17px'
                    }}>
                        <Image
                            src='https://scontent.flpb1-2.fna.fbcdn.net/v/t31.0-8/22861371_1507326192716347_8054347878307429882_o.png?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ig-_X_vVz5wAX-3jYgB&_nc_ht=scontent.flpb1-2.fna&oh=c840b8cf8bcbfaf59e2e73fedc06ce5b&oe=606E94CE'
                            variant='avatar'
                        />
                    </Box>
                    <h4 sx={{
                        color: 'white',
                        marginLeft: '17px'
                    }}>React Bootcamp 2021</h4>
                </Flex>
                <Flex>
                    <Flex sx={{
                        flexDirection: 'column',
                        marginLeft: '17px'
                    }}>
                        <Text sx={{
                            color: 'grayV1',
                            fontSize: 10
                        }}>
                            Description
                        </Text>
                        <Text sx={{
                            fontSize: 14,
                            color: '#96969D',
                            wordWrap: 'break-word',
                            width: '239px'
                        }}>
                            A simple activity description goes here
                        </Text>
                    </Flex>
                    <Flex sx={{
                        marginLeft: '40px'
                    }}>
                        <Button />
                    </Flex>
                </Flex>
                <Flex>
                    <Activity />
                </Flex>
                <Flex>
                    <Remote />
                </Flex>
                <Flex>
                    <Activity />
                </Flex>
                <Flex sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text sx={{
                        color: 'white'
                    }}>
                        View all activities
                    </Text>
                </Flex>
            </Box>
        </Flex>
    )
}
