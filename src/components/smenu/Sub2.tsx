/*
 * File: Sub2.tsx
 * Desc: 异步子菜单
 * File Created: 2020-01-21 11:31:15
 * Author: chenghao at <865470087@qq.com>
 * ------
 * Copyright 2020 - present, chenghao
 */
import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Row, Col, Card } from 'antd';

const SmenuSub2 = () => {
    return (
        <div>
            <BreadcrumbCustom first="异步菜单" />
            <Row gutter={16}>
                <Col md={24}>
                    <Card title="异步子菜单" bordered={false}>
                        <div>异步子菜单2</div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SmenuSub2;
