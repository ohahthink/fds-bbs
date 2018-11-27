import React from 'react'
// JSX태그를 사용하려면 import React가 있어야 합니다

// HOC가 관심있어하는 prop만 남기고, 나머지는 아래쪽으로 내려줍니다
export default function withLoading(WrappedComponent) {
    // 컴포넌트 이름이니까 대문자로시작
    return function WithLoading(props) {
        const {loading, ...rest} = props
        if (loading) {
            return 'loading...'
        } else {
            return <WrappedComponent {...rest} />
        }
    }
}