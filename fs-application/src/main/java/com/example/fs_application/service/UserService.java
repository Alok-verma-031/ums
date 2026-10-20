package com.example.fs_application.service;

import com.example.fs_application.dto.GetAllDto;
import com.example.fs_application.dto.UserDto;
import com.example.fs_application.model.User;
import com.example.fs_application.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;
    public UserService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<GetAllDto> getAll() {
        List<User> user=userRepository.findAll();
        List<GetAllDto> users=new ArrayList<>();

        for(User u:user)
        {
            GetAllDto userinfo=new GetAllDto();
            userinfo.setId(u.getId());
            userinfo.setEmail(u.getEmail());
            userinfo.setName(u.getName());
//            userinfo.setUsername(u.getUsername());
            users.add(userinfo);
        }
        return users;
    }
    public UserDto getUser(Long id)
    {
        Optional<User> user=userRepository.findById(id);
        if(user.isEmpty()){
            return null;
        }
        User u=user.get();
        UserDto userinfo=new UserDto();
            userinfo.setEmail(u.getEmail());
            userinfo.setName(u.getName());
            userinfo.setUsername(u.getUsername());
            return userinfo;
    }

    public Boolean deleteUser(Long id) {
        Optional<User> user=userRepository.findById(id);
        if(user.isEmpty())
        {
            return false;
        }
        userRepository.deleteById(id);
        return true;
    }

    public Boolean updateUser(Long id, UserDto user) {
        Optional<User> userres=userRepository.findById(id);
        if(userres.isEmpty())
        {
            return false;
        }
        User u=userres.get();
        u.setEmail(user.getEmail());
        u.setEmail(user.getEmail());
        u.setUsername(user.getUsername());
        userRepository.save(u);
        return true;
    }

}
