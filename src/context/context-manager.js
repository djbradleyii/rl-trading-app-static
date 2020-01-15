import React from 'react';

const ContextManager = React.createContext({
    users: [],
    inventory: [],
    items: [],
    attributes: [],
    trades: [],
    teams: []
});

export default ContextManager;