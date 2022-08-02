package com.example.omymbackend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * packageName : com.example.omymbackend.model
 * fileName : login
 * author : macbook
 * date : 6/27/22
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 6/27/22         macbook          최초 생성
 */

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Board {

    // BOARD
    private Long idx; // 게시글 번호
    private String boardTitle; // 게시글 제목
    private String content; // 게시글 내용
    private String insertTime; // 게시글 작성 시간
    private String deleteYn; // 게시글 삭제 여부
    private Long userIdx; // 유저 번호
    private Long count; // 게시글 조회수

    // JOIN
    private String profileUrl; // 게시글 이미지
    private String id; // USER 테이블의 ID가 AUTHOR로 대체

    // UPLOAD
    private String fileId; // 첨부파일 id
    private String fileName; // 첨부파일 이름
    private String fileType; // 첨부파일 유형( image, text 등)
    private byte[] fileData; // oracle 이미지 담는 자료형(blob) : byte[]

    //    매개변수 3개짜리 생성자
    public Board(String boardTitle, String content, Long userIdx, String fileName, String fileType, byte[] fileData) {
        this.boardTitle = boardTitle;
        this.content = content;
        this.userIdx = userIdx;
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileData = fileData;
    }

}
