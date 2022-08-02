package com.example.omymbackend.service;

import com.example.omymbackend.model.BoardReply;

import java.util.List;

/**
 * packageName : com.example.omymbackend.service
 * fileName : BoardReplyService
 * author : macbook
 * date : 7/12/22
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 7/12/22         macbook          최초 생성
 */
public interface BoardReplyService {

    List<BoardReply> findReplyByIdx(Long idx);

    List<BoardReply> save(BoardReply boardReply);

    boolean deleteBoardReply(long idx);

}
