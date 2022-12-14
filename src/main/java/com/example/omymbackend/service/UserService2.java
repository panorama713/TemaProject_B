package com.example.omymbackend.service;

import com.example.omymbackend.model.User2;

import java.util.Optional;

/**
 * packageName : com.example.omymbackend.service
 * fileName : UserService
 * author : gim-yeong-geun
 * date : 2022/07/07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022/07/07         gim-yeong-geun          최초 생성
 */
public interface UserService2 {
    Optional<User2> findByUserIdx(Long userIdx);
}
