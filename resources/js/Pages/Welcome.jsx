import React from 'react';

function Welcome() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#4CBB17', height: '100vh', padding: '20px' }}>
            <div style={{ marginLeft: '5%' }}>
                <h1 style={{ color: '#FFFFFF' }}>BAYU</h1>
                {/* Add your icons here */}
            </div>
            <div style={{ marginRight: '5%', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2>Login</h2>
                <form>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="userId" style={{ display: 'block', marginBottom: '5px' }}>USER ID</label>
                        <input type="text" id="userId" name="userId" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}/>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>PASSWORD</label>
                        <input type="password" id="password" name="password" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}/>
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CBB17', color: '#FFFFFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Welcome;
