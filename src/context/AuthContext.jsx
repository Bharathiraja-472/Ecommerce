import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('velvora_users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('velvora_currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Sync users with localStorage
  useEffect(() => {
    localStorage.setItem('velvora_users', JSON.stringify(users));
  }, [users]);

  // Sync currentUser with localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('velvora_currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('velvora_currentUser');
    }
  }, [currentUser]);

  const signUp = (name, email, phone, password) => {
    const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      return { success: false, message: 'An account with this email coordinates already exists.' };
    }

    const newUser = {
      name,
      email,
      phone,
      password,
      createdAt: new Date().toISOString()
    };

    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  const login = (email, password) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return { success: false, message: 'No registered credentials found with this email coordinates.' };
    }
    if (user.password !== password) {
      return { success: false, message: 'Incorrect password coordinate. Please verify.' };
    }
    setCurrentUser(user);
    return { success: true };
  };

  const socialLogin = (provider) => {
    const mockEmail = `guest_${provider.toLowerCase()}@velvora.com`;
    const mockName = `${provider} Atelier Guest`;
    
    let user = users.find(u => u.email === mockEmail);
    if (!user) {
      user = {
        name: mockName,
        email: mockEmail,
        phone: '+00 0000 0000',
        password: '',
        isSocial: true,
        provider,
        createdAt: new Date().toISOString()
      };
      setUsers(prev => [...prev, user]);
    }
    
    setCurrentUser(user);
    return { success: true, name: mockName };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, signUp, login, socialLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
