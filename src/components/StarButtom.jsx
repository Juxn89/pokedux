import { Button } from 'antd';
import React from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';

export const StarButtom = ({ isFavorite, onClick }) => {
    const Icon = isFavorite ? <StarFilled /> : <StarOutlined />;

    return (
        <Button icon={ Icon } onClick= { onClick }></Button>
    )
}
